export const useUserRole = () => {
    return localStorage.getItem("userRole")?.toLowerCase();
  };