import { getServerSession } from 'next-auth';
import Form from './form';
import { redirect } from 'next/navigation';

export default async function LoginPage() {
  const session = await getServerSession();
  if (session) {
    redirect('/');
  }
  return (
    <div className="flex w-full h-screen lg:bg-abu bg-white">
      <div className="hidden relative lg:flex h-full w-1/2 justify-start">
        <div className="flex flex-col">
          <img
            src="/logo.svg"
            alt="logo"
            className="w-[177px] h-auto mb-36 mt-10 ml-[150px]"
          />
          <div className="flex flex-col ml-[245px]">
            <img src="/img/elevate.svg" alt="1" className="w-full" />
            <div className="w-[465px] mx-auto">
              <div className="font-bold text-[24px] text-black mb-4">
                Elevate Your Messaging Efficiency with Our Innovative Admin
                Tools
              </div>
              <div className="text-black text-[14px] font-medium">
                Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi lebih
                mudah dengan Admin Tools kami. Tingkatkan komunikasi Anda dan
                pelanggan dengan fitur pesan otomatis. Menyimpan kontak menjadi
                lebih praktis dengan fitur sinkronasi Google Concact. Dapatkan
                kendali penuh pesan dengan manajemen konten yang praktis.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex lg:items-center justify-center lg:w-1/2 lg:mr-4">
        <div className="flex flex-col">
          <img
            src="/logo.svg"
            alt="logo"
            className="lg:hidden w-[135px] h-auto mt-10 mx-auto"
          />
          <Form/>
        </div>
      </div>
    </div>
  );
}