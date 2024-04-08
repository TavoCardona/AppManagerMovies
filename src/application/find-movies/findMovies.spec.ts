import { MockProxy, mock } from 'jest-mock-extended';
//import { UserMother } from '../../../../test/user/domain/UserMother';
import { FindMovies } from './findMovies';
import { MoviesRepository } from 'src/domain/repositories/Movie.repository.interface';

describe('GetAllUsers', () => {
    let mockRepository: MockProxy<MoviesRepository>;
    let SUT: FindMovies;

    beforeEach(() => {
        mockRepository = mock();
        SUT = new FindMovies(mockRepository);
    });

    it('get empty list of users', () => {
        mockRepository.find()

        expect(SUT.execute()).resolves.toHaveLength(0);
    });

});