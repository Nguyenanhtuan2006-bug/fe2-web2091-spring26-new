import { useMutation, useQueryClient } from '@tanstack/react-query';

// Định nghĩa kiểu dữ liệu cơ bản cho Story
export interface Story {
  id: string | number;
  title: string;
  author?: string;
  // Thêm các trường khác tùy thuộc vào DB của bạn
}

// Hàm gọi API Update
const updateStoryApi = async (story: Story) => {
  const response = await fetch(`http://localhost:3000/stories/${story.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(story),
  });

  if (!response.ok) {
    throw new Error('Lỗi khi cập nhật truyện');
  }
  return response.json();
};

// Custom Hook
export const useUpdateStory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateStoryApi,
    onSuccess: () => {
      // Invalidate query có key là ['stories'] để fetch lại danh sách
      queryClient.invalidateQueries({ queryKey: ['stories'] });
    },
    onError: (error) => {
      console.error("Lỗi update:", error.message);
    }
  });
};