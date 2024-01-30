import { useState } from 'react'
import { companySizeOptions, subjectsOptions } from '../data/selectOptions'

import Input from './ui/Input'
import Select from './ui/Select'
import TextArea from './ui/TextArea'
import Button from './ui/Button'

const Form = ({ onSubmit }) => {
  const [inputName, setInputName] = useState('')
  const [inputEmail, setInputEmail] = useState('')
  const [subjects, setSubjects] = useState('')
  const [companySize, setCompanySize] = useState('')
  const [message, setMessage] = useState('50-100 employees')

  return (
    <form className="bg-light-gray/30 p-6 rounded-2xl grid gap-6 max-w-3xl relative left-1/2 transform -translate-x-1/2 md:grid-cols-8" onSubmit={onSubmit}>
      <div className="flex flex-col gap-y-4 col-span-full md:grid md:grid-cols-2 md:gap-4">
        <Input
          value={inputName}
          setValue={setInputName}
          type="text"
          inputName="name"
          placeholder="Ethan Johnson"
          label="Name"
        />
        <Input
          value={inputEmail}
          setValue={setInputEmail}
          type="email"
          inputName="email"
          placeholder="ethan@johnson.com"
          label="Company Email"
        />
      </div>
      <div className="flex flex-col gap-y-4 col-span-full md:grid md:grid-cols-2 md:gap-4">
        <Select
          selectName="companySize"
          label="Company Sizes"
          value={companySize}
          setValue={setCompanySize}
          options={companySizeOptions}
        />
        <Select
          selectName="subject"
          label="Subject"
          value={subjects}
          setValue={setSubjects}
          options={subjectsOptions}
        />
      </div>
      <div className="flex flex-col gap-y-6 col-span-full">
        <TextArea
          value={message}
          setValue={setMessage}
          txtAreaName='message'
          label='Message'
          placeholder='Send a message'
        />
        <Button value='Contact Sales' />
      </div>
    </form>
  )
}

export default Form
