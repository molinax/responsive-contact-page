import Form from './components/Form'

const App = () => {
  const onSubmit = () => console.log('xd')

  return (
    <div className="p-5 flex flex-col gap-y-12 max-w-7xl mx-auto md:py-8 md:gap-y-16">
      <header>
        <img src="../public/img/contact-form-icon.svg" alt="Becv logo" />
      </header>
      <main className="flex flex-col gap-y-12 lg:gap-y-20">
        <section className="text-center max-w-xl mx-auto">
          <h1 className="text-3xl font-bold mb-4 sm:text-4xl lg:text-6xl">Interested in our business pricing?</h1>
          <p className="sm:text-xl lg:text-2xl">
            Fill out the form to view details and we&apos;ll contact you as soon
            as possible
          </p>
        </section>
        <Form onSubmit={onSubmit} />
      </main>
    </div>
  )
}

export default App
