//type BID_KEYS = "NOT_USED" | "BID_INITIATED";

export enum BID_VALUES {
  NOT_USED = "Bid not used",
  BID_INITIATED = "Bid is initiated",
}

/* export const BID_STATUS: Record<string, string> = {
  NOT_USED: "Bid not used",
  BID_INITIATED: "Bid is initiated",
}; */

export interface BondRowData {
  status: BID_VALUES;
  CPN?: number;
}

export const muFun = (/* value: BondRowData */) => {
  /*   const { status } = value;
  if (status === "abc") {
    console.log("Type issue");
  } else if (status == BID_VALUES.BID_INITIATED) {
    console.log("Bid is initiated");
  } */

  const value: BondRowData = { status: BID_VALUES.BID_INITIATED, CPN: 123 };
  console.log(value);
};
