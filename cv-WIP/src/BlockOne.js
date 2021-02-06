import Education from './Education'

const edsList = [
  { title: 'Master of the world', place: 'The Life', years: '1990-2000' },
  { title: 'Full-Stack', place: 'TheBridge', years: '0-1' },
  { title: 'Sea Science Degree', place: 'The Sea', years: '2010 - 2013' }
]

export default function BlockOne() {
  return (
    <section className="block">
      <Education edsList={edsList} />
    </section>
  )
}