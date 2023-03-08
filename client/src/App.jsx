import React, {useState} from 'react'
import FormFiled from './components/FormField'

const App = () => {

    const handleSubmit = () => {}

    const [loading, setLoading] = useState(false)

    const HandleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const [form, setForm] = useState({
        prompt: '',
        image: ''
    })

    const GenerateImage = async () => {
        if (form.prompt) {
          try {
            setLoading(true)
            const response = await fetch('http://localhost:8080/api/v1/dalle', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                prompt: form.prompt,
              }),
            });
            const data = await response.json();
            setForm({ ...form, image: `data:image/jpeg;base64,${data.photo}` });
          } catch (err) {
            alert(err);
          } finally {
            setLoading(false);
          }
        } else {
          alert('Please provide proper prompt');
        }
      };


    return ( 
        <section className='max-w-7xl mx-auto'>
            <form action="#" className='max-w-3xl mt-16' onSubmit={handleSubmit}>
                <div className='flex flex-col gap-5'>
                    <FormFiled
                        labelName='Prompt'
                        type='text'
                        name='prompt'
                        placeholder='Enter your whishes here: Yellow robot drinking coca-cola zero on Titanic'
                        value={form.prompt}
                        handleChange={HandleChange}
                    />
                    <div className='relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center mt-7'>
                        {console.log(form)}
                        <img src={form.image} alt={form.prompt} className='w-full h-full object-contain'/>
                    </div>
                </div>
                <div className='mt-5 flex gap-5'>
                    <button type='button' onClick={GenerateImage} className='text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center w-full' disabled={loading}>
                            {loading ? 'Loading...' : 'Generate'}
                    </button>
                </div>
            </form>
        </section>
    )
}

export default App