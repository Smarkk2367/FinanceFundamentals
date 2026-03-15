import { ArticleLayout } from "@/components/ArticleLayout";

export default function SupplyDemandPage() {
    return (
        <ArticleLayout
            title="Popyt i Podaż"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam."
        >
            <h2>Lorem Ipsum</h2>
            <div className="grid md:grid-cols-2 gap-8 my-8">
                <div>
                    <h3 className="text-xl font-bold text-brand-navy border-b pb-2 mb-4">Lorem</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-brand-navy border-b pb-2 mb-4">Ipsum</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus.
                    </p>
                </div>
            </div>

            <h2>Lorem Ipsum</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus.
            </p>

            <h2>Lorem Ipsum</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus.
            </p>
            <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus. lorem ipsum dolor.</li>
            </ul>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus.
            </p>
        </ArticleLayout>
    );
}
