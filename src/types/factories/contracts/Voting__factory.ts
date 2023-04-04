/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Voting, VotingInterface } from "../../contracts/Voting";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "voter",
        type: "address",
      },
      {
        indexed: true,
        internalType: "string",
        name: "imageId",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "Voted",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "imageToCosplayer",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_votePrice",
        type: "uint256",
      },
    ],
    name: "setVotePrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "imageId",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "upvote",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "votePrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "voteToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "votes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200148d3803806200148d8339818101604052810190620000379190620001dd565b620000576200004b620000a760201b60201c565b620000af60201b60201c565b600a60018190555080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506200020f565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001a58262000178565b9050919050565b620001b78162000198565b8114620001c357600080fd5b50565b600081519050620001d781620001ac565b92915050565b600060208284031215620001f657620001f562000173565b5b60006200020684828501620001c6565b91505092915050565b61126e806200021f6000396000f3fe6080604052600436106100915760003560e01c80638da5cb5b116100595780638da5cb5b146101365780639426856d14610161578063b99ef1fa1461018a578063f2fde38b146101c7578063f889a471146101f057610091565b8063160d66ae146100965780633ccfd60b146100c15780635e6a49c5146100d8578063715018a6146100f4578063860c851a1461010b575b600080fd5b3480156100a257600080fd5b506100ab61022d565b6040516100b8919061096b565b60405180910390f35b3480156100cd57600080fd5b506100d6610253565b005b6100f260048036038101906100ed9190610b16565b61039e565b005b34801561010057600080fd5b50610109610579565b005b34801561011757600080fd5b5061012061058d565b60405161012d9190610b81565b60405180910390f35b34801561014257600080fd5b5061014b610593565b6040516101589190610bbd565b60405180910390f35b34801561016d57600080fd5b5061018860048036038101906101839190610bd8565b6105bc565b005b34801561019657600080fd5b506101b160048036038101906101ac9190610c05565b61063b565b6040516101be9190610b81565b60405180910390f35b3480156101d357600080fd5b506101ee60048036038101906101e99190610c7a565b610669565b005b3480156101fc57600080fd5b5061021760048036038101906102129190610c05565b6106ec565b6040516102249190610d26565b60405180910390f35b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016102b09190610bbd565b602060405180830381865afa1580156102cd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102f19190610d5d565b9050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb610339610593565b836040518363ffffffff1660e01b8152600401610357929190610d8a565b6020604051808303816000875af1158015610376573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061039a9190610deb565b5050565b600081116103e1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103d890610e64565b60405180910390fd5b6000816001546103f19190610eb3565b905080341015610436576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161042d90610f41565b60405180910390fd5b816003846040516104479190610f9d565b908152602001604051809103902060008282546104649190610fb4565b92505081905550826040516104799190610f9d565b60405180910390203373ffffffffffffffffffffffffffffffffffffffff167f4cb100a8e68e1799bf9aad11db2dbe58aa4bbf18dc9c7caa54d5281f4e92faec84426040516104c9929190610fe8565b60405180910390a3600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330846040518463ffffffff1660e01b815260040161053093929190611011565b6020604051808303816000875af115801561054f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105739190610deb565b50505050565b6105816107a2565b61058b6000610820565b565b60015481565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6105c4610593565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610631576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610628906110ba565b60405180910390fd5b8060018190555050565b6003818051602081018201805184825260208301602085012081835280955050505050506000915090505481565b6106716107a2565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036106e0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106d79061114c565b60405180910390fd5b6106e981610820565b50565b60048180516020810182018051848252602083016020850120818352809550505050505060009150905080546107219061119b565b80601f016020809104026020016040519081016040528092919081815260200182805461074d9061119b565b801561079a5780601f1061076f5761010080835404028352916020019161079a565b820191906000526020600020905b81548152906001019060200180831161077d57829003601f168201915b505050505081565b6107aa6108e4565b73ffffffffffffffffffffffffffffffffffffffff166107c8610593565b73ffffffffffffffffffffffffffffffffffffffff161461081e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161081590611218565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061093161092c610927846108ec565b61090c565b6108ec565b9050919050565b600061094382610916565b9050919050565b600061095582610938565b9050919050565b6109658161094a565b82525050565b6000602082019050610980600083018461095c565b92915050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6109ed826109a4565b810181811067ffffffffffffffff82111715610a0c57610a0b6109b5565b5b80604052505050565b6000610a1f610986565b9050610a2b82826109e4565b919050565b600067ffffffffffffffff821115610a4b57610a4a6109b5565b5b610a54826109a4565b9050602081019050919050565b82818337600083830152505050565b6000610a83610a7e84610a30565b610a15565b905082815260208101848484011115610a9f57610a9e61099f565b5b610aaa848285610a61565b509392505050565b600082601f830112610ac757610ac661099a565b5b8135610ad7848260208601610a70565b91505092915050565b6000819050919050565b610af381610ae0565b8114610afe57600080fd5b50565b600081359050610b1081610aea565b92915050565b60008060408385031215610b2d57610b2c610990565b5b600083013567ffffffffffffffff811115610b4b57610b4a610995565b5b610b5785828601610ab2565b9250506020610b6885828601610b01565b9150509250929050565b610b7b81610ae0565b82525050565b6000602082019050610b966000830184610b72565b92915050565b6000610ba7826108ec565b9050919050565b610bb781610b9c565b82525050565b6000602082019050610bd26000830184610bae565b92915050565b600060208284031215610bee57610bed610990565b5b6000610bfc84828501610b01565b91505092915050565b600060208284031215610c1b57610c1a610990565b5b600082013567ffffffffffffffff811115610c3957610c38610995565b5b610c4584828501610ab2565b91505092915050565b610c5781610b9c565b8114610c6257600080fd5b50565b600081359050610c7481610c4e565b92915050565b600060208284031215610c9057610c8f610990565b5b6000610c9e84828501610c65565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610ce1578082015181840152602081019050610cc6565b60008484015250505050565b6000610cf882610ca7565b610d028185610cb2565b9350610d12818560208601610cc3565b610d1b816109a4565b840191505092915050565b60006020820190508181036000830152610d408184610ced565b905092915050565b600081519050610d5781610aea565b92915050565b600060208284031215610d7357610d72610990565b5b6000610d8184828501610d48565b91505092915050565b6000604082019050610d9f6000830185610bae565b610dac6020830184610b72565b9392505050565b60008115159050919050565b610dc881610db3565b8114610dd357600080fd5b50565b600081519050610de581610dbf565b92915050565b600060208284031215610e0157610e00610990565b5b6000610e0f84828501610dd6565b91505092915050565b7f416d6f756e74206d7573742062652067726561746572207468616e207a65726f600082015250565b6000610e4e602083610cb2565b9150610e5982610e18565b602082019050919050565b60006020820190508181036000830152610e7d81610e41565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610ebe82610ae0565b9150610ec983610ae0565b9250828202610ed781610ae0565b91508282048414831517610eee57610eed610e84565b5b5092915050565b7f4e6f7420656e6f75676820657468657220746f20766f74650000000000000000600082015250565b6000610f2b601883610cb2565b9150610f3682610ef5565b602082019050919050565b60006020820190508181036000830152610f5a81610f1e565b9050919050565b600081905092915050565b6000610f7782610ca7565b610f818185610f61565b9350610f91818560208601610cc3565b80840191505092915050565b6000610fa98284610f6c565b915081905092915050565b6000610fbf82610ae0565b9150610fca83610ae0565b9250828201905080821115610fe257610fe1610e84565b5b92915050565b6000604082019050610ffd6000830185610b72565b61100a6020830184610b72565b9392505050565b60006060820190506110266000830186610bae565b6110336020830185610bae565b6110406040830184610b72565b949350505050565b7f4f6e6c7920746865206f776e65722063616e207365742074686520766f74652060008201527f7072696365000000000000000000000000000000000000000000000000000000602082015250565b60006110a4602583610cb2565b91506110af82611048565b604082019050919050565b600060208201905081810360008301526110d381611097565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000611136602683610cb2565b9150611141826110da565b604082019050919050565b6000602082019050818103600083015261116581611129565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806111b357607f821691505b6020821081036111c6576111c561116c565b5b50919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000611202602083610cb2565b915061120d826111cc565b602082019050919050565b60006020820190508181036000830152611231816111f5565b905091905056fea26469706673582212209147ccd84d63c33c3e1127f3d657f6571cedd150420700e2c537da3cf2bb6af664736f6c63430008120033";

type VotingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VotingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Voting__factory extends ContractFactory {
  constructor(...args: VotingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _tokenAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Voting> {
    return super.deploy(_tokenAddress, overrides || {}) as Promise<Voting>;
  }
  override getDeployTransaction(
    _tokenAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_tokenAddress, overrides || {});
  }
  override attach(address: string): Voting {
    return super.attach(address) as Voting;
  }
  override connect(signer: Signer): Voting__factory {
    return super.connect(signer) as Voting__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VotingInterface {
    return new utils.Interface(_abi) as VotingInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Voting {
    return new Contract(address, _abi, signerOrProvider) as Voting;
  }
}
