//! THIS FILE WAS AUTO-GENERATED USING THE SUBSTRATE BENCHMARK CLI VERSION 2.0.0

#![allow(unused_parens)]
#![allow(unused_imports)]

use frame_support::weights::{constants::RocksDbWeight as DbWeight, Weight};

pub trait WeightInfo {
    fn feed_values(u: u32) -> Weight;
    fn insert_authorized_oracle() -> Weight;
    fn remove_authorized_oracle() -> Weight;
}

impl crate::WeightInfo for () {
    // WARNING! Some components were not used: ["u"]
    // TODO: run actual benchmark and replace this.
    fn feed_values(_u: u32) -> Weight {
        42_788_000_u64
            .saturating_add(DbWeight::get().reads(5_u64))
            .saturating_add(DbWeight::get().writes(2_u64))
    }
    fn insert_authorized_oracle() -> Weight {
        6_788_000_u64.saturating_add(DbWeight::get().writes(1_u64))
    }
    fn remove_authorized_oracle() -> Weight {
        6_021_000_u64.saturating_add(DbWeight::get().writes(1_u64))
    }
}