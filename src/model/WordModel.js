export default function WordModel(_id, en, vn, isMemorized = false) {
  this._id = _id;
  this.en = en;
  this.vn = vn;
  this.isMemorized = isMemorized;
}
