import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Story } from './useUpdateStory'; // Import type từ file trên hoặc tự định nghĩa lại

// --- CÁC HÀM GỌI API ---

const fetchStories = async () => {
  const response = await fetch('http://localhost:3000/stories');
  if (!response.ok) throw new Error('Lỗi lấy danh sách truyện');
  return response.json();
};

const createStory = async (newStory: Omit<Story, 'id'>) => {
  const response = await fetch('http://localhost:3000/stories', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newStory),
  });
  if (!response.ok) throw new Error('Lỗi thêm truyện');
  return response.json();
};

const deleteStory = async (id: string | number) => {
  const response = await fetch(`http://localhost:3000/stories/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Lỗi xóa truyện');
  return response.json();
};

const updateStory = async (story: Story) => {
  const response = await fetch(`http://localhost:3000/stories/${story.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(story),
  });
  if (!response.ok) throw new Error('Lỗi cập nhật truyện');
  return response.json();
};


// --- CUSTOM HOOK TỔNG HỢP ---

export const useCRUDStory = () => {
  const queryClient = useQueryClient();
  const QUERY_KEY = ['stories'];

  // 1. READ (Lấy danh sách)
  const list = useQuery({
    queryKey: QUERY_KEY,
    queryFn: fetchStories,
  });

  // 2. CREATE (Thêm)
  const add = useMutation({
    mutationFn: createStory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEY });
    },
  });

  // 3. DELETE (Xóa)
  const remove = useMutation({
    mutationFn: deleteStory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEY });
    },
  });

  // 4. UPDATE (Sửa)
  const update = useMutation({
    mutationFn: updateStory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEY });
    },
  });

  // Trả về object chứa tất cả operations
  return { list, add, remove, update };
};