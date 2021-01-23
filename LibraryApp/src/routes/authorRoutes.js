const express = require ('express');

const authorsRouter = express.Router();
function router(nav){
    var authors = [
        {
            author:'Harper Lee',
            born: 'April 28, 1926',
            bornplace:'Monroeville, Alabama, U.S.',
            died:'February 19, 2016',
            deathplace:'Monroeville, Alabama, U.S.',
            img:"Author1.jpg",
            about:'Harper Lee is the daughter of Amasa Coleman Lee, a lawyer who was by all accounts apparently rather like the hero-father of her novel in his sound citizenship and warmheartedness. The plot of To Kill a Mockingbird is based in part on his unsuccessful youthful defense of two African American men convicted of murder. Lee studied law at the University of Alabama (spending a summer as an exchange student at Oxford) but left for New York City without earning a degree. In New York she worked as an airline reservationist but soon received financial aid from friends that allowed her to write full-time. With the help of an editor, she transformed a series of short stories into To Kill a Mockingbird.'
        },
        {
            author:'F. Scott Fitzgerald',
            born: 'September 24, 1896',
            bornplace:'St. Paul, Minnesota, U.S.',
            died:'December 21, 1940',
            deathplace:'Hollywood, California',
            img:"Author2.jpg",
            about:'F. Scott Fitzgerald, in full Francis Scott Key Fitzgerald, American short-story writer and novelist famous for his depictions of the Jazz Age (the 1920s), his most brilliant novel being The Great Gatsby (1925). His private life, with his wife, Zelda, in both America and France, became almost as celebrated as his novels. Fitzgerald was the only son of an unsuccessful, aristocratic father and an energetic, provincial mother. Half the time he thought of himself as the heir of his father’s tradition, which included the author of “The Star-Spangled Banner,” Francis Scott Key, after whom he was named, and half the time as “straight 1850 potato-famine Irish.” As a result he had typically ambivalent American feelings about American life, which seemed to him at once vulgar and dazzlingly promising. He also had an intensely romantic imagination, what he once called “a heightened sensitivity to the promises of life,” and he charged into experience determined to realize those promises. At both St. Paul Academy (1908–10) and Newman School (1911–13), he tried too hard and made himself unpopular, but at Princeton University he came close to realizing his dream of a brilliant success. He became a prominent figure in the literary life of the university and made lifelong friendships with Edmund Wilson and John Peale Bishop. He became a leading figure in the socially important Triangle Club, a dramatic society, and was elected to one of the leading clubs of the university. He fell in love with Ginevra King, one of the beauties of her generation. Then he lost Ginevra and flunked out of Princeton.'
        },
        {
            author:'Miguel de Cervantes',
            born: 'September 29, 1547',
            bornplace:'Alcala de Henares, Spain',
            died:'April 22, 1616',
            deathplace:'Madrid, Spain',
            img:"Author3.jpg",
            about:'Miguel de Cervantes, in full Miguel de Cervantes Saavedra, Spanish novelist, playwright, and poet, the creator of Don Quixote (1605, 1615) and the most important and celebrated figure in Spanish literature. His novel Don Quixote has been translated, in full or in part, into more than 60 languages. Editions continue regularly to be printed, and critical discussion of the work has proceeded unabated since the 18th century. At the same time, owing to their widespread representation in art, drama, and film, the figures of Don Quixote and Sancho Panza are probably familiar visually to more people than any other imaginary characters in world literature. Cervantes was a great experimenter. He tried his hand in all the major literary genres save the epic. He was a notable short-story writer, and a few of those in his collection of Novelas exemplares (1613; Exemplary Stories) attain a level close to that of Don Quixote, on a miniature scale.'
        }
    ]
    
    authorsRouter.get('/',(req,res)=>{
        res.render("authors",
            {
            nav,
            title:'Authors | Library App',
            head:'Authors',
            authors
        });
    })
    
    authorsRouter.get('/:id',(req,res)=>{
        const id = req.params.id;
        res.render('author',
        {
        nav,
        title:'Author | Library App',
        head:'Author',
        author: authors[id]
        });
    })

    return authorsRouter;
}

module.exports = router;