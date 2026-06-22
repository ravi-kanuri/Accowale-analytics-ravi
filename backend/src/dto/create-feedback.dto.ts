export interface CreateFeedbackDto {
  categoryId: string;
  name?: string;
  email?: string;
  comment: string;
}