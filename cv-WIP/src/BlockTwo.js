import List from './List'

const langs = [
  'JavaScript',
  'Node',
  'Go',
  'Ruby',
  'C++',
  'Java',
  'Haskell',
  'PHP'
]

const tongues = [
  'Spanish',
  'English',
  'French',
  'German',
  'Italian',
  'Russian'
]

export default function BlockTwo() {
  return (
    <section className="block">
      <List list={langs} />
      <List list={tongues} />
    </section>
  )
}