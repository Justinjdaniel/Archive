const express = require ('express');

const booksRouter = express.Router();
function router(nav){
    var books = [
        {
            title: 'To Kill a Mockingbird',
            author:'Harper Lee',
            genre:'Novel, Thriller,Domestic Fiction',
            published: '1960',
            img:"Book1.jpg",
            about:'Harper Lee, believed to be one of the most influential authors to have ever existed, famously published only a single novel (up until its controversial sequel was published in 2015 just before her death). Lee’s To Kill a Mockingbird was published in 1960 and became an immediate classic of literature. The novel examines racism in the American South through the innocent wide eyes of a clever young girl named Jean Louise (“Scout”) Finch. Its iconic characters, most notably the sympathetic and just lawyer and father Atticus Finch, served as role models and changed perspectives in the United States at a time when tensions regarding race were high. To Kill a Mockingbird earned the Pulitzer Prize for fiction in 1961 and was made into an Academy Award-winning film in 1962, giving the story and its characters further life and influence over the American social sphere.'
        },
        {
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            genre: 'Novel, Tragedy, Historical Fiction',
            published:'1925',
            img:"Book2.jpg",
            about:'F. Scott Fitzgerald’s The Great Gatsby is distinguished as one of the greatest texts for introducing students to the art of reading literature critically (which means you may have read it in school). The novel is told from the perspective of a young man named Nick Carraway who has recently moved to New York City and is befriended by his eccentric nouveau riche neighbor with mysterious origins, Jay Gatsby. The Great Gatsby provides an insider’s look into the Jazz Age of the 1920s in United States history while at the same time critiquing the idea of the “American Dream.” Perhaps the most-famous aspect of the novel is its cover art—a piercing face projected onto a dark blue night sky and lights from a cityscape—an image that is also found, in a slightly different configuration, within the text itself as a key symbol.'
        },
        {
            title: 'Don Quixote',
            author: 'Miguel de Cervantes',
            genre: 'Parody, Historical Fiction, Adventure fiction',
            published:'1605',
            img:"Book3.jpg",
            about:'Miguel de Cervantes’s Don Quixote, perhaps the most influential and well-known work of Spanish literature, was first published in full in 1615. The novel, which is very regularly regarded as one of the best literary works of all time, tells the story of a man who takes the name “Don Quixote de la Mancha” and sets off in a fit of obsession over romantic novels about chivalry to revive the custom and become a hero himself. The character of Don Quixote has become an idol and somewhat of an archetypal character, influencing many major works of art, music, and literature since the novel’s publication. The text has been so influential that a word, quixotic, based on the Don Quixote character, was created to describe someone who is, “foolishly impractical especially in the pursuit of ideals; especially: marked by rash lofty romantic ideas or extravagantly chivalrous action.”'
        }
    ]
    
    booksRouter.get('/',(req,res)=>{
        res.render("books",
            {
            nav,
            title:'Books | Library App',
            head:'Books',
            books
        });
    })
    
    booksRouter.get('/:id',(req,res)=>{
        const id = req.params.id;
        res.render('book',
        {
        nav,
        title:'Book | Library App',
        head:'Book',
        book: books[id]
        });
    })

    return booksRouter;
}

module.exports = router;