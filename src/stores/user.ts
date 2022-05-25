import { defineStore } from "pinia";
import { supabase } from "@/supabase";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    isAuthenticated: false,
    isLoading: false,
  }),
  getters: {},
  actions: {
    async signIn(email: string): Promise<string> {
      try {
        this.isLoading = true;
        const { error } = await supabase.auth.signIn({ email: email });
        if (error) throw error;
        return "Check your email for the login link!";
      } catch (error) {
        return error.error_description || error.message;
      } finally {
        this.isLoading = false;
      }
    },
  },
});
