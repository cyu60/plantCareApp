export const getDisplayCategory = (category: string) => {
    switch (category) {
      case "LOW_MAINTENANCE":
        return "Low Maintenance";
      case "MID_MAINTENANCE":
        return "Moderate Maintenance";
      case "HIGH_MAINTENANCE":
        return "High Maintenance";
        default:
            return null;
        }
  };