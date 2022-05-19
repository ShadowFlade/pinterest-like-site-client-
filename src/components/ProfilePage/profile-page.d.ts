export interface ProfileStatistics {
  pinsUploadedTotal: number;
  pinsDownloadedTotal: number;
  lastSevenDaysActivity: {
    1: {
      pinsInteractedWith: number;
    };
    2: {
      pinsInteractedWith: number;
    };
    3: {
      pinsInteractedWith: number;
    };
    4: {
      pinsInteractedWith: number;
    };
    5: {
      pinsInteractedWith: number;
    };
    6: {
      pinsInteractedWith: number;
    };
    7: {
      pinsInteractedWith: number;
    };
  };
}

export type Collection = string[];
