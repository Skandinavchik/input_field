import SearchIcon from './components/icons/SearchIcon'
import Input from './components/ui/Input'

const App = () => {

  return (
    <div className='container py-4 flex flex-col gap-5'>
      <Input type='text' placeholder='With placeholder' />
      <Input type='text' id='1' label='With label' />
      <Input type='file' />
      <Input type='password' id='2' label='Required' placeholder='Some text required' required />
      <Input type='search' placeholder='With icon' icon={<SearchIcon />} />
      <Input type='text' placeholder='Disabled' disabled />
    </div>
  )
}

export default App
