import * as Note from '../models/noteModel.js';

export async function list(req, res, next) {
  try {
    res.json(await Note.findAll());
  } catch (err) {
    next(err);
  }
}

export async function create(req, res, next) {
  try {
    const { title, content } = req.body;
    if (!title || !title.trim()) {
      return res.status(400).json({ error: 'Le titre est obligatoire' });
    }
    const note = await Note.create({
      title: title.trim(),
      content: content || '',
    });
    res.status(201).json(note);
  } catch (err) {
    next(err);
  }
}
