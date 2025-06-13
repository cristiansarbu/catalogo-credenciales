module.exports = {
    get: (req, res) => {
        const { lng } = req.query;
        res.cookie('18next', lng);
        const redirectPath = req.get('Referrer') || '/';
        res.redirect(redirectPath);
    }
}