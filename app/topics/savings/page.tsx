import { ArticleLayout } from "@/components/ArticleLayout";
import Link from "next/link";

export default function SavingsPage() {
    return (
        <ArticleLayout
            title="Oszczędzanie i Inwestowanie"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
        >
            <h2>Lorem Ipsum</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus. <strong>Lorem Ipsum</strong> ullamcorper morbi tincidunt ornare massa eget egestas purus viverra.
            </p>

            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus.</h2>
            <p>CLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus. Lorem ipsum dolor sit amet:</p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm">
                    <h3 className="text-brand-gold font-bold mt-0 text-xl">Oszczędzanie</h3>
                    <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit <Link href="/topics/inflation">lorem</Link>.</p>
                </div>
                <div className="border border-brand-navy-light/20 rounded-xl p-6 bg-brand-navy-light/5 shadow-sm">
                    <h3 className="text-brand-navy font-bold mt-0 text-xl">Inwestowanie</h3>
                    <p className="text-sm">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                </div>
            </div>

            <h2>Lorem Ipsum</h2>
            <p>
                Albert Einstein: <em>"Lorem ipsum dolor sit amet, consectetur adipiscing elit"</em>.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus.
            </p>
        </ArticleLayout>
    );
}
