import { useState } from 'react'

const Form = () => {
    const [inputValue, setInputValue] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        alert(`입력된 값: ${inputValue}`)
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter text"
                className="border px-3 py-2 rounded"
            />
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
                제출
            </button>
        </form>
    )
}

export default Form
