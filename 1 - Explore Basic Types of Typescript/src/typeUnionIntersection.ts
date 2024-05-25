{

    // Union Type

    type FrontendDeveloper = 'loserDeveloper' | 'winnerDeveloper';

    const frontendDeveloper1 : FrontendDeveloper = 'loserDeveloper'

    type BackendDeveloper = 'fakibajiDeveloper' | 'expertDeveloper';

    const backendDeveloper1 : BackendDeveloper = 'expertDeveloper'

    type FullStackDeveloper = FrontendDeveloper | BackendDeveloper;

    const developer1 : FullStackDeveloper = 'expertDeveloper';


    // Intersection Type

    type MernDeveloper = {
        skills : string[];
        frontendDeveloper: string;
    }

    type ReactDeveloper = {
        skills: string[];
        backendDeveloper: string;
    }

    type ExpertDeveloper = MernDeveloper & ReactDeveloper;

    const developer2 : ExpertDeveloper = {
        skills: ['Nodejs', 'Expressjs'],
        frontendDeveloper: 'React',
        backendDeveloper: 'Json Web Token' 
        // for intersection need all type of assign variable
    }





}