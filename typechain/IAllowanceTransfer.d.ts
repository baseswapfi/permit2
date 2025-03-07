/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IAllowanceTransferInterface extends ethers.utils.Interface {
  functions: {
    "DOMAIN_SEPARATOR()": FunctionFragment;
    "allowance(address,address,address)": FunctionFragment;
    "approve(address,address,uint160,uint48)": FunctionFragment;
    "invalidateNonces(address,address,uint48)": FunctionFragment;
    "lockdown(tuple[])": FunctionFragment;
    "permit(address,tuple,bytes)": FunctionFragment;
    "transferFrom(tuple[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "DOMAIN_SEPARATOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allowance",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "invalidateNonces",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "lockdown",
    values: [{ token: string; spender: string }[]]
  ): string;
  encodeFunctionData(
    functionFragment: "permit",
    values: [
      string,
      {
        details: {
          token: string;
          amount: BigNumberish;
          expiration: BigNumberish;
          nonce: BigNumberish;
        }[];
        spender: string;
        sigDeadline: BigNumberish;
      },
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [
      { from: string; to: string; amount: BigNumberish; token: string }[]
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "DOMAIN_SEPARATOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "invalidateNonces",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lockdown", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;

  events: {
    "Approval(address,address,address,uint160,uint48)": EventFragment;
    "Lockdown(address,address,address)": EventFragment;
    "NonceInvalidation(address,address,address,uint48,uint48)": EventFragment;
    "Permit(address,address,address,uint160,uint48,uint48)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Lockdown"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NonceInvalidation"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Permit"): EventFragment;
}

export class IAllowanceTransfer extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IAllowanceTransferInterface;

  functions: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "DOMAIN_SEPARATOR()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    allowance(
      user: string,
      token: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<{
      amount: BigNumber;
      expiration: number;
      nonce: number;
      0: BigNumber;
      1: number;
      2: number;
    }>;

    "allowance(address,address,address)"(
      user: string,
      token: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<{
      amount: BigNumber;
      expiration: number;
      nonce: number;
      0: BigNumber;
      1: number;
      2: number;
    }>;

    approve(
      token: string,
      spender: string,
      amount: BigNumberish,
      expiration: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "approve(address,address,uint160,uint48)"(
      token: string,
      spender: string,
      amount: BigNumberish,
      expiration: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    invalidateNonces(
      token: string,
      spender: string,
      newNonce: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "invalidateNonces(address,address,uint48)"(
      token: string,
      spender: string,
      newNonce: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    lockdown(
      approvals: { token: string; spender: string }[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "lockdown(tuple[])"(
      approvals: { token: string; spender: string }[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "permit(address,(tuple[],address,uint256),bytes)"(
      owner: string,
      permitBatch: {
        details: {
          token: string;
          amount: BigNumberish;
          expiration: BigNumberish;
          nonce: BigNumberish;
        }[];
        spender: string;
        sigDeadline: BigNumberish;
      },
      signature: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "permit(address,((address,uint160,uint48,uint48),address,uint256),bytes)"(
      owner: string,
      permitSingle: {
        details: {
          token: string;
          amount: BigNumberish;
          expiration: BigNumberish;
          nonce: BigNumberish;
        };
        spender: string;
        sigDeadline: BigNumberish;
      },
      signature: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferFrom(tuple[])"(
      transferDetails: {
        from: string;
        to: string;
        amount: BigNumberish;
        token: string;
      }[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferFrom(address,address,uint160,address)"(
      from: string,
      to: string,
      amount: BigNumberish,
      token: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

  "DOMAIN_SEPARATOR()"(overrides?: CallOverrides): Promise<string>;

  allowance(
    user: string,
    token: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<{
    amount: BigNumber;
    expiration: number;
    nonce: number;
    0: BigNumber;
    1: number;
    2: number;
  }>;

  "allowance(address,address,address)"(
    user: string,
    token: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<{
    amount: BigNumber;
    expiration: number;
    nonce: number;
    0: BigNumber;
    1: number;
    2: number;
  }>;

  approve(
    token: string,
    spender: string,
    amount: BigNumberish,
    expiration: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "approve(address,address,uint160,uint48)"(
    token: string,
    spender: string,
    amount: BigNumberish,
    expiration: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  invalidateNonces(
    token: string,
    spender: string,
    newNonce: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "invalidateNonces(address,address,uint48)"(
    token: string,
    spender: string,
    newNonce: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  lockdown(
    approvals: { token: string; spender: string }[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "lockdown(tuple[])"(
    approvals: { token: string; spender: string }[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "permit(address,(tuple[],address,uint256),bytes)"(
    owner: string,
    permitBatch: {
      details: {
        token: string;
        amount: BigNumberish;
        expiration: BigNumberish;
        nonce: BigNumberish;
      }[];
      spender: string;
      sigDeadline: BigNumberish;
    },
    signature: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "permit(address,((address,uint160,uint48,uint48),address,uint256),bytes)"(
    owner: string,
    permitSingle: {
      details: {
        token: string;
        amount: BigNumberish;
        expiration: BigNumberish;
        nonce: BigNumberish;
      };
      spender: string;
      sigDeadline: BigNumberish;
    },
    signature: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferFrom(tuple[])"(
    transferDetails: {
      from: string;
      to: string;
      amount: BigNumberish;
      token: string;
    }[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferFrom(address,address,uint160,address)"(
    from: string,
    to: string,
    amount: BigNumberish,
    token: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

    "DOMAIN_SEPARATOR()"(overrides?: CallOverrides): Promise<string>;

    allowance(
      user: string,
      token: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<{
      amount: BigNumber;
      expiration: number;
      nonce: number;
      0: BigNumber;
      1: number;
      2: number;
    }>;

    "allowance(address,address,address)"(
      user: string,
      token: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<{
      amount: BigNumber;
      expiration: number;
      nonce: number;
      0: BigNumber;
      1: number;
      2: number;
    }>;

    approve(
      token: string,
      spender: string,
      amount: BigNumberish,
      expiration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "approve(address,address,uint160,uint48)"(
      token: string,
      spender: string,
      amount: BigNumberish,
      expiration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    invalidateNonces(
      token: string,
      spender: string,
      newNonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "invalidateNonces(address,address,uint48)"(
      token: string,
      spender: string,
      newNonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    lockdown(
      approvals: { token: string; spender: string }[],
      overrides?: CallOverrides
    ): Promise<void>;

    "lockdown(tuple[])"(
      approvals: { token: string; spender: string }[],
      overrides?: CallOverrides
    ): Promise<void>;

    "permit(address,(tuple[],address,uint256),bytes)"(
      owner: string,
      permitBatch: {
        details: {
          token: string;
          amount: BigNumberish;
          expiration: BigNumberish;
          nonce: BigNumberish;
        }[];
        spender: string;
        sigDeadline: BigNumberish;
      },
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "permit(address,((address,uint160,uint48,uint48),address,uint256),bytes)"(
      owner: string,
      permitSingle: {
        details: {
          token: string;
          amount: BigNumberish;
          expiration: BigNumberish;
          nonce: BigNumberish;
        };
        spender: string;
        sigDeadline: BigNumberish;
      },
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferFrom(tuple[])"(
      transferDetails: {
        from: string;
        to: string;
        amount: BigNumberish;
        token: string;
      }[],
      overrides?: CallOverrides
    ): Promise<void>;

    "transferFrom(address,address,uint160,address)"(
      from: string,
      to: string,
      amount: BigNumberish,
      token: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    Approval(
      owner: string | null,
      token: string | null,
      spender: string | null,
      amount: null,
      expiration: null
    ): EventFilter;

    Lockdown(owner: string | null, token: null, spender: null): EventFilter;

    NonceInvalidation(
      owner: string | null,
      token: string | null,
      spender: string | null,
      newNonce: null,
      oldNonce: null
    ): EventFilter;

    Permit(
      owner: string | null,
      token: string | null,
      spender: string | null,
      amount: null,
      expiration: null,
      nonce: null
    ): EventFilter;
  };

  estimateGas: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<BigNumber>;

    "DOMAIN_SEPARATOR()"(overrides?: CallOverrides): Promise<BigNumber>;

    allowance(
      user: string,
      token: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allowance(address,address,address)"(
      user: string,
      token: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      token: string,
      spender: string,
      amount: BigNumberish,
      expiration: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "approve(address,address,uint160,uint48)"(
      token: string,
      spender: string,
      amount: BigNumberish,
      expiration: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    invalidateNonces(
      token: string,
      spender: string,
      newNonce: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "invalidateNonces(address,address,uint48)"(
      token: string,
      spender: string,
      newNonce: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    lockdown(
      approvals: { token: string; spender: string }[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "lockdown(tuple[])"(
      approvals: { token: string; spender: string }[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "permit(address,(tuple[],address,uint256),bytes)"(
      owner: string,
      permitBatch: {
        details: {
          token: string;
          amount: BigNumberish;
          expiration: BigNumberish;
          nonce: BigNumberish;
        }[];
        spender: string;
        sigDeadline: BigNumberish;
      },
      signature: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "permit(address,((address,uint160,uint48,uint48),address,uint256),bytes)"(
      owner: string,
      permitSingle: {
        details: {
          token: string;
          amount: BigNumberish;
          expiration: BigNumberish;
          nonce: BigNumberish;
        };
        spender: string;
        sigDeadline: BigNumberish;
      },
      signature: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferFrom(tuple[])"(
      transferDetails: {
        from: string;
        to: string;
        amount: BigNumberish;
        token: string;
      }[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferFrom(address,address,uint160,address)"(
      from: string,
      to: string,
      amount: BigNumberish,
      token: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "DOMAIN_SEPARATOR()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allowance(
      user: string,
      token: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "allowance(address,address,address)"(
      user: string,
      token: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      token: string,
      spender: string,
      amount: BigNumberish,
      expiration: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "approve(address,address,uint160,uint48)"(
      token: string,
      spender: string,
      amount: BigNumberish,
      expiration: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    invalidateNonces(
      token: string,
      spender: string,
      newNonce: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "invalidateNonces(address,address,uint48)"(
      token: string,
      spender: string,
      newNonce: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    lockdown(
      approvals: { token: string; spender: string }[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "lockdown(tuple[])"(
      approvals: { token: string; spender: string }[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "permit(address,(tuple[],address,uint256),bytes)"(
      owner: string,
      permitBatch: {
        details: {
          token: string;
          amount: BigNumberish;
          expiration: BigNumberish;
          nonce: BigNumberish;
        }[];
        spender: string;
        sigDeadline: BigNumberish;
      },
      signature: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "permit(address,((address,uint160,uint48,uint48),address,uint256),bytes)"(
      owner: string,
      permitSingle: {
        details: {
          token: string;
          amount: BigNumberish;
          expiration: BigNumberish;
          nonce: BigNumberish;
        };
        spender: string;
        sigDeadline: BigNumberish;
      },
      signature: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferFrom(tuple[])"(
      transferDetails: {
        from: string;
        to: string;
        amount: BigNumberish;
        token: string;
      }[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferFrom(address,address,uint160,address)"(
      from: string,
      to: string,
      amount: BigNumberish,
      token: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
