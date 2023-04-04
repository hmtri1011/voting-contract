/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Counter, CounterInterface } from "../Counter";

const _abi = [
  {
    inputs: [],
    name: "count",
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
    name: "decrement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "increment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506101b5806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806306661abd146100465780632baeceb714610064578063d09de08a1461006e575b600080fd5b61004e610078565b60405161005b91906100cd565b60405180910390f35b61006c61007e565b005b610076610099565b005b60005481565b60016000808282546100909190610117565b92505081905550565b60016000808282546100ab919061014b565b92505081905550565b6000819050919050565b6100c7816100b4565b82525050565b60006020820190506100e260008301846100be565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610122826100b4565b915061012d836100b4565b9250828203905081811115610145576101446100e8565b5b92915050565b6000610156826100b4565b9150610161836100b4565b9250828201905080821115610179576101786100e8565b5b9291505056fea2646970667358221220ef74d11dd6ec483848ce13b7ddba5d2f58d384a511295c483ac64103583454c564736f6c63430008120033";

type CounterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CounterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Counter__factory extends ContractFactory {
  constructor(...args: CounterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Counter> {
    return super.deploy(overrides || {}) as Promise<Counter>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Counter {
    return super.attach(address) as Counter;
  }
  override connect(signer: Signer): Counter__factory {
    return super.connect(signer) as Counter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CounterInterface {
    return new utils.Interface(_abi) as CounterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Counter {
    return new Contract(address, _abi, signerOrProvider) as Counter;
  }
}