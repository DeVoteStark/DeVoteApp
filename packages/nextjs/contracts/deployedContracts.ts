/**
 * This file is autogenerated by Scaffold-Stark.
 * You should not edit it manually or your changes might be overwritten.
 */

const deployedContracts = {
  devnet: {
    Test: {
      address:
        "0x56725046cd5a93368516859fc3652146bb8534c768aeefd732b59a088274729",
      abi: [
        {
          type: "impl",
          name: "TestImpl",
          interface_name: "contracts::Test::ITest",
        },
        {
          type: "struct",
          name: "contracts::Test::PersonPublic",
          members: [
            {
              name: "wallet_id",
              type: "core::felt252",
            },
            {
              name: "id_number",
              type: "core::felt252",
            },
            {
              name: "role",
              type: "core::felt252",
            },
          ],
        },
        {
          type: "struct",
          name: "contracts::Test::PersonProposalStruct",
          members: [
            {
              name: "proposal_id",
              type: "core::felt252",
            },
            {
              name: "role",
              type: "core::integer::u8",
            },
          ],
        },
        {
          type: "struct",
          name: "core::integer::u256",
          members: [
            {
              name: "low",
              type: "core::integer::u128",
            },
            {
              name: "high",
              type: "core::integer::u128",
            },
          ],
        },
        {
          type: "enum",
          name: "core::bool",
          variants: [
            {
              name: "False",
              type: "()",
            },
            {
              name: "True",
              type: "()",
            },
          ],
        },
        {
          type: "struct",
          name: "contracts::Test::ProposalVoteTypeStruct",
          members: [
            {
              name: "vote_type",
              type: "core::felt252",
            },
            {
              name: "count",
              type: "core::integer::u256",
            },
            {
              name: "is_active",
              type: "core::bool",
            },
          ],
        },
        {
          type: "struct",
          name: "contracts::Test::ProposalPublic",
          members: [
            {
              name: "id",
              type: "core::felt252",
            },
            {
              name: "name",
              type: "core::felt252",
            },
            {
              name: "state",
              type: "core::integer::u8",
            },
            {
              name: "total_voters",
              type: "core::integer::u256",
            },
            {
              name: "has_voted",
              type: "core::integer::u256",
            },
            {
              name: "type_votes",
              type: "core::array::Array::<contracts::Test::ProposalVoteTypeStruct>",
            },
          ],
        },
        {
          type: "interface",
          name: "contracts::Test::ITest",
          items: [
            {
              type: "function",
              name: "read_wallet_id",
              inputs: [],
              outputs: [
                {
                  type: "core::felt252",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "create_new_person",
              inputs: [
                {
                  name: "wallet_id",
                  type: "core::felt252",
                },
                {
                  name: "id_number",
                  type: "core::felt252",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "change_person_rol",
              inputs: [
                {
                  name: "wallet_id",
                  type: "core::felt252",
                },
                {
                  name: "new_rol",
                  type: "core::felt252",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "get_person",
              inputs: [
                {
                  name: "wallet_id",
                  type: "core::felt252",
                },
              ],
              outputs: [
                {
                  type: "contracts::Test::PersonPublic",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "get_persona",
              inputs: [],
              outputs: [
                {
                  type: "contracts::Test::PersonPublic",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "get_persona_by_wallet",
              inputs: [],
              outputs: [
                {
                  type: "contracts::Test::PersonPublic",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "get_person_proposals",
              inputs: [
                {
                  name: "wallet_id",
                  type: "core::felt252",
                },
              ],
              outputs: [
                {
                  type: "core::array::Array::<contracts::Test::PersonProposalStruct>",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "create_proposal",
              inputs: [
                {
                  name: "wallet_id",
                  type: "core::felt252",
                },
                {
                  name: "proposal_id",
                  type: "core::felt252",
                },
                {
                  name: "name",
                  type: "core::felt252",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "get_proposal",
              inputs: [
                {
                  name: "proposal_id",
                  type: "core::felt252",
                },
              ],
              outputs: [
                {
                  type: "contracts::Test::ProposalPublic",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "add_voter",
              inputs: [
                {
                  name: "wallet_id",
                  type: "core::felt252",
                },
                {
                  name: "proposal_id",
                  type: "core::felt252",
                },
                {
                  name: "voter_id",
                  type: "core::felt252",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "modify_voters",
              inputs: [
                {
                  name: "owner_wallet_id",
                  type: "core::felt252",
                },
                {
                  name: "proposal_id",
                  type: "core::felt252",
                },
                {
                  name: "wallet_id",
                  type: "core::felt252",
                },
                {
                  name: "role",
                  type: "core::integer::u8",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "remove_voters",
              inputs: [
                {
                  name: "owner_wallet_id",
                  type: "core::felt252",
                },
                {
                  name: "proposal_id",
                  type: "core::felt252",
                },
                {
                  name: "wallet_id",
                  type: "core::felt252",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "add_vote_type",
              inputs: [
                {
                  name: "wallet_id",
                  type: "core::felt252",
                },
                {
                  name: "proposal_id",
                  type: "core::felt252",
                },
                {
                  name: "vote_type",
                  type: "core::felt252",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "remove_vote_type",
              inputs: [
                {
                  name: "wallet_id",
                  type: "core::felt252",
                },
                {
                  name: "proposal_id",
                  type: "core::felt252",
                },
                {
                  name: "vote_type",
                  type: "core::felt252",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "get_vote_types",
              inputs: [
                {
                  name: "proposal_id",
                  type: "core::felt252",
                },
              ],
              outputs: [
                {
                  type: "core::array::Array::<contracts::Test::ProposalVoteTypeStruct>",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "start_votation",
              inputs: [
                {
                  name: "wallet_id",
                  type: "core::felt252",
                },
                {
                  name: "proposal_id",
                  type: "core::felt252",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "vote",
              inputs: [
                {
                  name: "wallet_id",
                  type: "core::felt252",
                },
                {
                  name: "proposal_id",
                  type: "core::felt252",
                },
                {
                  name: "vote_type",
                  type: "core::felt252",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "end_votation",
              inputs: [
                {
                  name: "wallet_id",
                  type: "core::felt252",
                },
                {
                  name: "proposal_id",
                  type: "core::felt252",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "view_votation",
              inputs: [
                {
                  name: "proposal_id",
                  type: "core::felt252",
                },
              ],
              outputs: [
                {
                  type: "core::array::Array::<contracts::Test::ProposalVoteTypeStruct>",
                },
              ],
              state_mutability: "view",
            },
          ],
        },
        {
          type: "constructor",
          name: "constructor",
          inputs: [],
        },
        {
          type: "event",
          name: "contracts::Test::Test::PersonAdded",
          kind: "struct",
          members: [
            {
              name: "wallet_id",
              type: "core::starknet::contract_address::ContractAddress",
              kind: "data",
            },
            {
              name: "id_number",
              type: "core::felt252",
              kind: "key",
            },
            {
              name: "role",
              type: "core::felt252",
              kind: "data",
            },
          ],
        },
        {
          type: "event",
          name: "contracts::Test::Test::PersonUpdated",
          kind: "struct",
          members: [
            {
              name: "wallet_id_signer",
              type: "core::starknet::contract_address::ContractAddress",
              kind: "key",
            },
            {
              name: "wallet_id",
              type: "core::felt252",
              kind: "data",
            },
            {
              name: "role",
              type: "core::felt252",
              kind: "data",
            },
          ],
        },
        {
          type: "event",
          name: "contracts::Test::Test::UnauthorizeEvent",
          kind: "struct",
          members: [
            {
              name: "function_name",
              type: "core::felt252",
              kind: "data",
            },
            {
              name: "type_error",
              type: "core::felt252",
              kind: "data",
            },
            {
              name: "wallet_id",
              type: "core::starknet::contract_address::ContractAddress",
              kind: "data",
            },
          ],
        },
        {
          type: "event",
          name: "contracts::Test::Test::GeneralEvent",
          kind: "struct",
          members: [
            {
              name: "function_name",
              type: "core::felt252",
              kind: "data",
            },
            {
              name: "type_error",
              type: "core::felt252",
              kind: "data",
            },
            {
              name: "wallet_id",
              type: "core::felt252",
              kind: "data",
            },
          ],
        },
        {
          type: "event",
          name: "contracts::Test::Test::Event",
          kind: "enum",
          variants: [
            {
              name: "PersonAdded",
              type: "contracts::Test::Test::PersonAdded",
              kind: "nested",
            },
            {
              name: "PersonUpdated",
              type: "contracts::Test::Test::PersonUpdated",
              kind: "nested",
            },
            {
              name: "UnauthorizeEvent",
              type: "contracts::Test::Test::UnauthorizeEvent",
              kind: "nested",
            },
            {
              name: "GeneralEvent",
              type: "contracts::Test::Test::GeneralEvent",
              kind: "nested",
            },
          ],
        },
      ],
      classHash:
        "0x24175e7c7d7c6a9a23e8c20b790abcd25fc31b60320cb234ca42b626a2a45f3",
    },
  },
} as const;

export default deployedContracts;
