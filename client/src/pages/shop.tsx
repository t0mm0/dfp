export default function Shop() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4 py-8 sm:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="street-text font-bold text-3xl sm:text-4xl md:text-5xl mb-4">Shop</h1>
          <p className="text-lg sm:text-xl text-gray-300">Support the movement - Palestinian solidarity merchandise</p>
        </div>

        {/* Canva Iframe Embed */}
        <div className="max-w-4xl mx-auto">
          <div style={{
            position: 'relative', 
            width: '100%', 
            height: '0', 
            paddingTop: '141.4286%',
            paddingBottom: '0', 
            boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', 
            marginTop: '1.6em', 
            marginBottom: '0.9em', 
            overflow: 'hidden',
            borderRadius: '8px', 
            willChange: 'transform'
          }}>
            <iframe 
              loading="lazy" 
              style={{
                position: 'absolute', 
                width: '100%', 
                height: '100%', 
                top: '0', 
                left: '0', 
                border: 'none', 
                padding: '0',
                margin: '0'
              }}
              src="https://www.canva.com/design/DAGvtyIMrBI/t7xtrv9ft83JLD2FAbcpXw/view?embed" 
              allowFullScreen={true}
              allow="fullscreen">
            </iframe>
          </div>
          
          <div className="text-center mt-4">
            <a 
              href="https://www.canva.com/design/DAGvtyIMrBI/t7xtrv9ft83JLD2FAbcpXw/view?utm_content=DAGvtyIMrBI&utm_campaign=designshare&utm_medium=embeds&utm_source=link" 
              target="_blank" 
              rel="noopener"
              className="text-red-500 hover:text-red-400 underline text-lg font-semibold"
            >
              D4P Catalogue
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}