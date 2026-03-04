import { ArticleLayout } from "@/components/ArticleLayout";

export default function InflationPage() {
    return (
        <ArticleLayout
            title="Inflacja i jej skutki"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in odio quis lacus pharetra sodales."
        >
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla <strong>pariatur</strong>.
            </p>

            <h2>Consectetur adipiscing elit</h2>
            <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <h2>Lorem ipsum</h2>
            <ul>
                <li><strong>Lorem ipsum:</strong> Consectetur adipiscing elit. Lorem ipsum dolor sit amet.</li>
                <li><strong>Dolor sit amet:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ul>

            <div className="bg-brand-navy-light/5 p-6 rounded-lg my-8 border-l-4 border-brand-gold">
                <h3 className="text-brand-navy mt-0">Złota Myśl</h3>
                <p className="mb-0">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." – Lorem Ipsum
                </p>
            </div>

            <h2>Lorem Ipsum</h2>
            <p>
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla <strong>pariatur</strong>.
            </p>
        </ArticleLayout>
    );
}
