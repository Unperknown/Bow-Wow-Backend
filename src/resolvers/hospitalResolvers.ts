import { hospital } from 'entities';

const hospitalResolvers = {
  Query: {
    hostpital: async (_: any, { id }: any) => await hospital.findByIds(id),
    hostpitals: async () => await hospital.find({})
  },
  Mutation: {
    addHostpital: async (_: any, { _hospital }: any) => await hospital.insert(_hospital),
    updateHostpital: async (_: any, { id, _hostpital }: any) => await hospital.update(id, _hostpital),
    deleteHostpital: async (_: any, { id }: any) => await hospital.delete(id)
  }
};

export {
  hospitalResolvers,
};