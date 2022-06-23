initSidebarItems({"constant":[["TARGET_SPACING","Target Spacing: 10 minutes (600 seconds)"],["VERSION","This runtime version."],["WASM_BINARY",""],["WASM_BINARY_BLOATY",""],["WEIGHT_PER_SECOND",""]],"enum":[["Call",""],["DispatchClass","A generalized group of dispatch types."],["Event",""],["Everything","A [`Contains`] implementation that contains every value."],["IssueEvent","The event emitted by this pallet."],["NominationEvent","The event emitted by this pallet."],["Nothing","A [`Contains`] implementation that contains no value."],["OriginCaller",""],["RedeemEvent","The event emitted by this pallet."],["RefundEvent","The event emitted by this pallet."],["RelayCall","Contains one variant per dispatchable that can be called by an extrinsic."],["RelayEvent","The event emitted by this pallet."],["ReplaceEvent","The event emitted by this pallet."],["StatusCode","Enum indicating the status of the BTC Parachain."],["TimestampCall","Contains one variant per dispatchable that can be called by an extrinsic."]],"fn":[["get_all_module_accounts",""],["native_version","The version information used to identify this runtime when compiled natively."]],"macro":[["construct_runtime","Construct a runtime, with the given name and the given pallets."],["parameter_types","Create new implementations of the `Get` trait."]],"mod":[["api",""],["constants","A set of constant values used in the testnet runtime."],["token_distribution",""],["xcm_config",""]],"struct":[["AdjustmentVariable","The adjustment variable of the runtime. Higher values will cause `TargetBlockFullness` to change the fees more rapidly."],["AssetAuthority",""],["BalanceWrapper","a wrapper around a balance, used in RPC to workaround a bug where using u128 in runtime-apis fails. See https://github.com/paritytech/substrate/issues/4641"],["BaseCallFilter",""],["BasicDeposit",""],["BlockExecutionWeight","Time to execute an empty block. Calculated by multiplying the Average with `1` and adding `0`."],["BlockHashCount",""],["BlockNumberToBalance",""],["Burn",""],["CollatorPotId",""],["CollatorSelectionAccount",""],["CurrencyConvert",""],["DealWithFees",""],["DealWithRewards",""],["DustRemovalWhitelist",""],["EmissionPeriod",""],["EnactmentPeriod",""],["EscrowAnnuityAccount",""],["EscrowAnnuityPalletId",""],["EscrowBlockRewardProvider",""],["ExecutiveBody",""],["ExistentialDeposits",""],["ExtrinsicBaseWeight","Time to execute a NO-OP extrinsic, for example `System::remark`. Calculated by multiplying the Average with `1` and adding `0`."],["FastTrackVotingPeriod",""],["FeeAccount",""],["FeePalletId",""],["FieldDeposit",""],["GenesisConfig",""],["GetDepositBase",""],["GetDepositFactor",""],["GetMaxSignatories",""],["GetNativeCurrencyId",""],["GetRelayChainCurrencyId",""],["GetWrappedCurrencyId",""],["IdentityFee","Implementor of `WeightToFee` that maps one unit of weight to one unit of fee."],["InflationPeriod",""],["IssueRequest",""],["LaunchPeriod",""],["MaxAdditionalFields",""],["MaxApprovals",""],["MaxAuthorities",""],["MaxCandidates",""],["MaxExpectedValue",""],["MaxInvulnerables",""],["MaxLocks",""],["MaxPeriod",""],["MaxProposals",""],["MaxRegistrars",""],["MaxScheduledPerBlock",""],["MaxSubAccounts",""],["MaxVestingSchedules",""],["MaxVotes",""],["MaximumSchedulerWeight",""],["MinCandidates",""],["MinVestedTransfer",""],["MinimumDeposit",""],["MinimumMultiplier","Minimum amount of the multiplier. This value cannot be too low. A test case should ensure that combined with `AdjustmentVariable`, we can recover from the minimum. See `multiplier_can_grow_from_zero`."],["MinimumPeriod",""],["NoPreimagePostponement",""],["Offset",""],["OperationalFeeMultiplier","This value increases the priority of `Operational` transactions by adding a “virtual tip” that’s equal to the `OperationalFeeMultiplier * final_fee`."],["Origin","The runtime origin type representing the origin of a call."],["PalletInfo","Provides an implementation of `PalletInfo` to provide information about the pallet setup in the runtime."],["ParachainBlocksPerBitcoinBlock",""],["Perbill","A fixed point representation of a number in the range [0, 1]."],["Period",""],["Permill","A fixed point representation of a number in the range [0, 1]."],["PreimageBaseDepositz",""],["PreimageByteDeposit",""],["PreimageByteDepositz",""],["PreimageMaxSize",""],["ProposalBond",""],["ProposalBondMaximum",""],["ProposalBondMinimum",""],["RedeemRequest",""],["RefundRequest",""],["ReplaceRequest",""],["ReservedDmpWeight",""],["ReservedXcmpWeight",""],["RocksDbWeight","By default, Substrate uses RocksDB, so this will be the weight used throughout the runtime."],["Runtime",""],["RuntimeApi",""],["RuntimeApiImpl","Implements all runtime apis for the client side."],["RuntimeBlockLength",""],["RuntimeBlockWeights",""],["SS58Prefix",""],["SchedulerMigrationV3",""],["SessionKeys",""],["SessionLength",""],["Span",""],["SpendPeriod",""],["SubAccountDeposit",""],["SupplyAccount",""],["SupplyPalletId",""],["TargetBlockFullness","The portion of the `NORMAL_DISPATCH_RATIO` that we adjust the fees with. Blocks filled less than this will decrease the weight and more will increase."],["TechnicalCommitteeMaxMembers",""],["TechnicalCommitteeMaxProposals",""],["TechnicalCommitteeMotionDuration",""],["TotalWrapped",""],["TransactionByteFee",""],["TreasuryAccount",""],["TreasuryPalletId",""],["UncleGenerations",""],["VaultAnnuityAccount",""],["VaultAnnuityPalletId",""],["VaultBlockRewardProvider",""],["VaultRegistryAccount",""],["VaultRegistryPalletId",""],["Version",""],["VotingPeriod",""]],"trait":[["BuildStorage","Complex storage builder stuff."],["CurrencyInfo",""],["Get","A trait for querying a single value from a type."],["KeyOwnerProofSystem","Something which can compute and check proofs of a historical key owner and return full identification data of that key owner."],["StorageValue","A trait for working with macro-generated storage values under the substrate storage API."]],"type":[["AccountId","Some way of identifying an account on the chain. We intentionally make it equivalent to the public key of our transaction signing scheme."],["Address","The address format for describing accounts."],["AllPallets","All pallets included in the runtime as a nested tuple of types."],["AllPalletsReversedWithSystemFirst","All pallets included in the runtime as a nested tuple of types in reversed order. With the system pallet first."],["AllPalletsWithSystem","All pallets included in the runtime as a nested tuple of types."],["AllPalletsWithSystemReversed","All pallets included in the runtime as a nested tuple of types in reversed order."],["AllPalletsWithoutSystem","All pallets included in the runtime as a nested tuple of types. Excludes the System pallet."],["AllPalletsWithoutSystemReversed","All pallets included in the runtime as a nested tuple of types in reversed order. Excludes the System pallet."],["AssetRegistry",""],["AssetRegistryConfig",""],["Aura",""],["AuraConfig",""],["AuraExt",""],["AuraExtConfig",""],["AuraId","An Aura authority identifier using S/R 25519 as its crypto."],["Authorship",""],["BTCRelay",""],["BTCRelayConfig",""],["Block","Block type as expected by this runtime."],["BlockId","BlockId type as expected by this runtime."],["BlockNumber","An index to a block."],["CheckedExtrinsic","Extrinsic type that has already been checked."],["CollatorSelection",""],["CollatorSelectionConfig",""],["CollatorSelectionUpdateOrigin","We allow root and the Relay Chain council to execute privileged collator selection operations."],["CumulusXcm",""],["Currency",""],["Democracy",""],["DemocracyConfig",""],["DmpQueue",""],["Escrow",""],["EscrowAnnuity",""],["EscrowRewards",""],["Executive","Executive: handles dispatch to the various modules."],["Fee",""],["FeeConfig",""],["Hash","A hash of some data used by the chain."],["Header","Block header type as expected by this runtime."],["Identity",""],["Issue",""],["IssueConfig",""],["LockIdentifier","An identifier for a lock. Used for disambiguating different locks so that they can be individually replaced or removed."],["Moment","An instant or duration in time."],["Multisig",""],["Nomination",""],["NominationConfig",""],["Nonce","Index of a transaction in the chain. 32-bit should be plenty."],["Oracle",""],["OracleConfig",""],["ParachainInfo",""],["ParachainInfoConfig",""],["ParachainSystem",""],["ParachainSystemConfig",""],["PolkadotXcm",""],["PolkadotXcmConfig",""],["Preimage",""],["Redeem",""],["RedeemConfig",""],["Refund",""],["RefundConfig",""],["Relay",""],["Replace",""],["ReplaceConfig",""],["Scheduler",""],["Security",""],["SecurityConfig",""],["Session",""],["SessionConfig",""],["Signature","Alias to 512-bit hash when used in the context of a transaction signature on the chain."],["SignedBlock","A Block signed with a Justification"],["SignedExtra","The SignedExtension to the basic transaction logic."],["SignedFixedPoint","The signed fixed point type."],["SignedInner","The `Inner` type of the `SignedFixedPoint`."],["SlowAdjustingFeeUpdate",""],["Sudo",""],["SudoConfig",""],["Supply",""],["SupplyConfig",""],["System",""],["SystemConfig",""],["TechnicalCommittee",""],["TechnicalCommitteeConfig",""],["TechnicalMembership",""],["TechnicalMembershipConfig",""],["Timestamp",""],["Tokens",""],["TokensConfig",""],["TransactionPayment",""],["Treasury",""],["TreasuryConfig",""],["UncheckedExtrinsic","Unchecked extrinsic type as expected by this runtime."],["UnknownTokens",""],["UnsignedFixedPoint","The unsigned fixed point type."],["UnsignedInner","The `Inner` type of the `UnsignedFixedPoint`."],["Utility",""],["VaultAnnuity",""],["VaultRegistry",""],["VaultRegistryConfig",""],["VaultRewards",""],["VaultStaking",""],["Vesting",""],["VestingConfig",""],["Weight","Numeric range of a transaction weight."],["XTokens",""],["XcmpQueue",""]]});