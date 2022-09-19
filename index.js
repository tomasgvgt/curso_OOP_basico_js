class LearningPath{
    constructor({
        name,
        type,
        programmingLanguages = [],
    }){
        this.name = name;
        this.type = type;
        this.programmingLanguages = programmingLanguages;
    }
}

class Course{
    #isFree;
    #isEnglish;
    constructor({
        name,
        type,
        isFree = false,
        isEnglish = false,
    }){
        this.name = name;
        this.type = type;
        this.teacher;
        this.#isFree = isFree;
        this.#isEnglish = isEnglish;
    }
    get isFree(){
        return this.#isFree;
    }
    get isEnglish(){
        return this.#isEnglish;
    }
}

class Comment{
    constructor(
        content,
        author
    ){
        this.content = content;
        this.author = author;
    }
}

class Student{
    #email;
    #name;
    #aproovedCourses;
    #learningPaths;
    constructor({
        name,
        age,
        email,
        aproovedCourses = [],
        learningPaths = [],
    }){
        this.#name = name;
        this.age = age;
        this.#learningPaths = learningPaths;
        this.#aproovedCourses = aproovedCourses;
        this.#email = email;
    }
    //private atribute #name cant be modified since it doesnt have a setter.
    get name(){
        return this.#name;
    }
    get email(){
        return this.#email;
    }
    //private attribute #email can be modified with a setter.
    set email(newEmail){
        this.#email = newEmail;
    }
    get aproovedCourses(){
        return this.#aproovedCourses;
    }
    get learningPaths(){
        return this.#learningPaths;
    }
    //Example of a private method(It ca oly be accesed inside the class)
    #addLP(learningPath){
        if(learningPath.constructor.name === 'LearningPath'){
            this.learningPaths.push(learningPath);
            console.log(`${learningPath} was added to Learning Paths`);
        }else{
            console.log(`${learningPath} is not a Learning path`);
        }
    }
    addLearningPath(learningPath){
        this.#addLP(learningPath);
    }
}

class FreeStudent extends Student{
    constructor(props){
        super(props);
    }
    addAproovedCourse(aproovedCourse){
        if(aproovedCourse.constructor.name !== 'Course'){
            console.log(`${aproovedCourse} no es un curso`);
        }else if(!aproovedCourse.isFree){
            console.log(`${aproovedCourse} no es un curso gratis`);
        }else{
            this.aproovedCourses.push(aproovedCourse);
            console.log(`${aproovedCourse} fue agregado a tus cursos aprobados`);
        }
    }
}

class BasicStudent extends Student{
    constructor(props){
        super(props);
    }
    addAproovedCourse(aproovedCourse){
        if(aproovedCourse.constructor.name !== 'Course'){
            console.log(`${aproovedCourse} no es un curso`);
        }else if(aproovedCourse.isEnglish){
            console.log(`${aproovedCourse} es un curso en ingles`);
        }else{
            this.aproovedCourses.push(aproovedCourse);
            console.log(`${aproovedCourse} fue agregado a tus cursos aprobados`);
        }
    }
}

class PremiumStudent extends Student{
    constructor(props){
        super(props);
    }
    addAproovedCourse(aproovedCourse){
        if(aproovedCourse.constructor.name !== 'Course'){
            console.log(`${aproovedCourse} no es un curso`);
        }else{
            this.aproovedCourses.push(aproovedCourse);
            console.log(`${aproovedCourse} fue agregado a tus cursos aprobados`);
        }
    }
    publishComment(content){
        const newComment = new Comment(
            content,
            this.name,
        )
        console.log(`Estudiante ${this.name} comento: ${content}`);
    }
}

class TeacherStudent extends PremiumStudent{
    constructor(
        props,
        subject
        ){
        super(props);
        this.subject = subject;
    }
    publishComment(content){
        const newComment = new Comment(
            content,
            this.name,
        )
        console.log(`Profe de ${this.subject}, ${this.name} comento: ${content}`);
    }

}


const jsBackend = new LearningPath(
    {
        name: 'Backend con Node.js',
        type: 'Desarrollo de software',
        programmingLanguages: ['Javascrypt'],
    }
)

const dataBases = new LearningPath({
    name: 'Bases de datos desde cero',
    type: 'Desarrollo de software',
    programmingLanguages: ['Javascrypt', 'python']
})

const startupschool = new LearningPath({
    name: 'Startup School',
    type: 'Negocios',
})

const jsProfound = new LearningPath({
    name: 'Javascrypt a profundidad',
    type: 'Desarollo de software',
    programmingLanguages: ['Javascrypt']
})

const jsBasic = new Course({
    name: 'Curso basico de JS',
    type: 'Desarrollo de software',
    isFree: true,
})

const scopesAndClosures = new Course({
    name: 'Curso de closures and scopes en JS',
    type: 'Desarrollo de software',
    isFree: true,
})

const ecmaScript6 = new Course({
    name: 'ECMAScript 6+',
    type: 'Desarrollo de software',
})

const oop = new Course({
    name: 'Curso de OOP',
    type: 'Desarrollo de software',
    isEnglish: true,
})

const oopBasicJS = new Course({
    name: 'Curso de OOP basico en JS',
    type: 'Desarrollo de software',
    isEnglish: true,
})
oopBasicJS.teacher = 'Juan David Castro Gallego';

const gitAndGithub = new Course({
    name: 'Curso de GIT y GITHUB profesional',
    type: 'Desarrollo de software'
})

const oopIntermediate = new Course({
    name: 'Curso de oop intermedio en JS',
    type: 'Desarrollo de software'
})

const tomas = new PremiumStudent({
    name: 'Tomas Gomez',
    age: '33',
    email: 'something@somethingelse.com',
    learningPaths: [jsBackend, jsProfound, dataBases],
})


const helena = new BasicStudent({
    name: 'Helena de Troya',
    age: '20',
    learningPaths: [startupschool],
    email: 'helenita@greekmail.com'
})

const hercules = new FreeStudent({
    name: 'Greek Herakles',
    age: '40',
    email: 'herakles@olimpus.com'
})

const athena = new TeacherStudent({
    name: 'Pallas Athena', 
    age: '400',
    email: 'athena@olimpus.com'
}, 'Software Engineering')

