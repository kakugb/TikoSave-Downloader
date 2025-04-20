import Link from "next/link"

function Footer(){

    return(
       <>
        {/* Footer Links */}
      <div className="w-full max-w-7xl  mx-auto  px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-center md:text-left mt-6">
        
        <div>
            <h3 className="font-bold mb-2 text-lg">Legal</h3>
            <ul className="grid grid-cols-1 space-y-1 font-semibold text-gray-600">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/termofuse">Terms of Use</Link>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2 text-lg">Support</h3>
            <ul className="space-y-1 font-semibold text-gray-600">
            <Link href="/contactus">Contact Us</Link>
            </ul>
          </div>
                  
        </div>
  
        {/* Copyright */}
        <div className="text-center text-sm mt-6 mb-20 px-4">
          Copyright 2025 copy; TikoSave.com Powered by TikoSave
        </div>
       </>
    )
}
export default Footer