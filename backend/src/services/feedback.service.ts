import { FeedbackRepository } from "../repositories/feedback.repository";

export class FeedbackService {
  private repository =
    new FeedbackRepository();

  async createFeedback(payload: any) {
    return this.repository.create(payload);
  }

  async getFeedbacks(query: any) {
    return this.repository.getFeedbacks(query);
  }
}