import { SharedContributionRepository } from "../repositories/sharedContributionRepository";

export const SharedContributionService = {
  create: SharedContributionRepository.create,
  getByExpense: SharedContributionRepository.getByExpense,
  update: SharedContributionRepository.update,
  delete: SharedContributionRepository.delete
};
