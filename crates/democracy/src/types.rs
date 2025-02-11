//! Miscellaneous additional datatypes.

use crate::{ReferendumIndex, VoteThreshold};
use codec::{Decode, Encode, MaxEncodedLen};
use scale_info::TypeInfo;
use sp_runtime::{
    traits::{Bounded, CheckedAdd, CheckedDiv, CheckedMul, CheckedSub, Saturating, Zero},
    RuntimeDebug,
};
use sp_std::prelude::*;

/// A standard vote, one-way (approve or reject).
#[derive(Encode, Decode, Copy, Clone, Eq, PartialEq, RuntimeDebug, TypeInfo, MaxEncodedLen)]
pub struct Vote<Balance> {
    pub aye: bool,
    pub balance: Balance,
}

/// The account is voting directly.
#[derive(Encode, Decode, Clone, Eq, PartialEq, Default, RuntimeDebug, TypeInfo)]
pub struct Voting<Balance> {
    /// The current votes of the account.
    pub(crate) votes: Vec<(ReferendumIndex, Vote<Balance>)>,
}

/// Info regarding an ongoing referendum.
#[derive(Encode, Decode, Default, Clone, PartialEq, Eq, RuntimeDebug, TypeInfo, MaxEncodedLen)]
pub struct Tally<Balance> {
    /// The number of aye votes.
    pub ayes: Balance,
    /// The number of nay votes.
    pub nays: Balance,
    /// The amount of funds currently expressing its opinion.
    pub turnout: Balance,
}

impl<Balance: From<u8> + Zero + Copy + CheckedAdd + CheckedSub + CheckedMul + CheckedDiv + Bounded + Saturating>
    Tally<Balance>
{
    /// Add an account's vote into the tally.
    pub(crate) fn add(&mut self, vote: Vote<Balance>) -> Option<()> {
        self.turnout = self.turnout.checked_add(&vote.balance)?;
        match vote.aye {
            true => self.ayes = self.ayes.checked_add(&vote.balance)?,
            false => self.nays = self.nays.checked_add(&vote.balance)?,
        }

        Some(())
    }

    /// Remove an account's vote from the tally.
    pub(crate) fn remove(&mut self, vote: Vote<Balance>) -> Option<()> {
        self.turnout = self.turnout.checked_sub(&vote.balance)?;
        match vote.aye {
            true => self.ayes = self.ayes.checked_sub(&vote.balance)?,
            false => self.nays = self.nays.checked_sub(&vote.balance)?,
        }

        Some(())
    }
}

/// Info regarding an ongoing referendum.
#[derive(Encode, Decode, Clone, PartialEq, Eq, RuntimeDebug, TypeInfo, MaxEncodedLen)]
pub struct ReferendumStatus<BlockNumber, Hash, Balance> {
    /// When voting on this referendum will end.
    pub end: BlockNumber,
    /// The hash of the proposal being voted on.
    pub proposal_hash: Hash,
    /// The thresholding mechanism to determine whether it passed.
    pub threshold: VoteThreshold,
    /// The delay (in blocks) to wait after a successful referendum before deploying.
    pub delay: BlockNumber,
    /// The current tally of votes in this referendum.
    pub tally: Tally<Balance>,
}

/// Info regarding a referendum, present or past.
#[derive(Encode, Decode, Clone, PartialEq, Eq, RuntimeDebug, TypeInfo, MaxEncodedLen)]
pub enum ReferendumInfo<BlockNumber, Hash, Balance> {
    /// Referendum is happening, the arg is the block number at which it will end.
    Ongoing(ReferendumStatus<BlockNumber, Hash, Balance>),
    /// Referendum finished at `end`, and has been `approved` or rejected.
    Finished { approved: bool, end: BlockNumber },
}
