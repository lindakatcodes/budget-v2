import { defineStore } from "pinia";
import { supabase } from "@/supabase";
import type { Account } from "@/models/models";

interface State {
  userId: string;
  accounts: Account[];
}

export const useUserAccountsStore = defineStore({
  id: "accounts",
  state: (): State => ({
    userId: "",
    accounts: [],
  }),
  getters: {},
  actions: {
    async getUserAccounts(userId: string) {
      try {
        const { data, error } = await supabase
          .from("Accounts")
          .select("*")
          .eq("belongs_to_user", userId);
        if (data) {
          this.userId = userId;
          data.forEach((row) => {
            this.accounts.push(row);
          });
        } else {
          throw error;
        }
      } catch (err) {
        return err;
      }
    },
  },
});
