import { defineStore } from "pinia";
import { supabase } from "@/supabase";
import type { User } from "@/models/models";
interface State {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: User;
}

export const useUserStore = defineStore({
  id: "user",
  state: (): State => ({
    isAuthenticated: false,
    isLoading: false,
    user: {
      id: "",
      email: "",
      avatar: "",
      name: "",
    },
  }),
  getters: {},
  actions: {
    async signIn(): Promise<User | unknown> {
      try {
        this.isLoading = true;
        const { user, error } = await supabase.auth.signIn({
          provider: "google",
        });
        if (user) {
          this.user = {
            id: user.id,
            email: user.user_metadata.email,
            avatar: user.user_metadata.avatar_url,
            name: user.user_metadata.name,
          };
          this.isAuthenticated = true;
        } else {
          throw error;
        }
      } catch (error) {
        return error;
      } finally {
        this.isLoading = false;
      }
    },
    async signOut(): Promise<unknown> {
      try {
        const { error } = await supabase.auth.signOut();
        this.user = {
          id: "",
          email: "",
          avatar: "",
          name: "",
        };
        this.isAuthenticated = false;
        throw error;
      } catch (error) {
        return error;
      }
    },
    async getUserInfo(): Promise<User | unknown> {
      try {
        const user = await supabase.auth.user();
        if (user) {
          this.user = {
            id: user.id,
            email: user.user_metadata.email,
            avatar: user.user_metadata.avatar_url,
            name: user.user_metadata.name,
          };
          this.isAuthenticated = true;
          return user;
        } else {
          throw "No user signed in";
        }
      } catch (error) {
        return error;
      }
    },
  },
});
