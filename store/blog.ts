import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface BlogState {
  name: string;
  action: 'update' | 'create';
  content: string;
  setName: (name: string) => void;
  setAction: (action: 'update' | 'create') => void;
  setContent: (content: string) => void;
  reset: () => void;
}

export const useBlogStore = create<BlogState>()(
  devtools((set) => ({
    name: '',
    action: 'create',
    content: '',
    setName: (name) => set({ name }),
    setAction: (action) => set({ action }),
    setContent: (content) => set({ content }),
    reset: () => {
      set({
        name: '',
        action: 'create',
        content: '',
      });
    },
  })),
);
