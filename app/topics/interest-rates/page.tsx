import { ArticleLayout } from "@/components/ArticleLayout";

export default function InterestRatesPage() {
    return (
        <ArticleLayout
            title="Stopy Procentowe"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus."
        >
            <h2>Czym są Stopy Procentowe?</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus.
            </p>

            <div className="bg-brand-navy-light text-white p-6 rounded-xl my-8">
                <h3 className="text-brand-gold mt-0 border-b border-brand-gold/30 pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus.</h3>
                <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus.
                </p>
            </div>

            <h2>Lorem Ipsum dolor seis</h2>

            <h3>1. Lorem</h3>
            <ul>
                <li><strong>Lorem:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus.</li>
                <li><strong>Ipsum:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus.</li>
            </ul>
            <p className="text-sm italic text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus.
            </p>

            <h3>2. Ipsum</h3>
            <ul>
                <li><strong>Lorem:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus.</li>
                <li><strong>Ipsum:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus.</li>
            </ul>

            <p className="font-bold border-l-4 border-brand-gold pl-4 mt-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus.
            </p>
        </ArticleLayout>
    );
}
