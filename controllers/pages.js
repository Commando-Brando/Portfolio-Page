exports.home = (req, res) => {
    res.status(200).render('index', {title: 'Home', cssFile: 'index.css'});
};

exports.contact = (req, res) => {
    res.status(200).render('contact', {title: 'Contact', cssFile: 'contact.css'});
}

exports.questionSubmit = (req, res) => {
    res.status(200).render('question-submit', {title: 'Question Submit', cssFile: 'question-submit.css'});
}

exports.quickStart = (req, res) => {
    res.status(200).render('quick-start', {title: 'Quick Start', cssFile: 'quick-start.css'});
}