export function invalidBody(req: any) {
    const review = {
        title: req.body.title,
        content: req.body.content,
        score: req.body.score,
    }

    const jsonBook = JSON.stringify(review)
    const jsonBody = JSON.stringify(req.body)

    if (jsonBook !== jsonBody) {
        return true
    }

    return false
}