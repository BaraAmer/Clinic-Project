const ArticleModel = require('../Model/Articles_Info');

exports.creatArticle = async function (title, description, Author) {

    const newacrticle = new ArticleModel({
        title: title,
        description: description,
        Author: Author,
        createdAt: new Date()
    })

    const res = await newacrticle.save();
    console.log(res);
}


