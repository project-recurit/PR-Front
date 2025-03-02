import { CategoryStoreContext } from '@/components/Providers/CategoryStoreProvider';
import type { CategoryStore } from '@/types/filterTypes';
import { useContext } from 'react';
import { useStore } from 'zustand';

export const useCategoryStore = <T>(
  selector: (store: CategoryStore) => T
): T => {
  const categoryStoreContext = useContext(CategoryStoreContext);

  if (!categoryStoreContext) {
    throw new Error('카테고리 정보를 가져오지 못했습니다.');
  }

  return useStore(categoryStoreContext, selector);
};
