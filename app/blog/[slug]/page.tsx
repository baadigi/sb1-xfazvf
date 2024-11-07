import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug, getPosts } from '@/lib/blog';
import { formatDate } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | BaaDigi Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg dark:prose-invert mx-auto">
          {/* Header */}
          <header className="mb-8">
            <div className="flex gap-2 mb-4">
              {post.categories.map((category) => (
                <Badge key={category} variant="secondary">
                  {category}
                </Badge>
              ))}
            </div>
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center text-sm text-muted-foreground">
              <span>{formatDate(post.date)}</span>
              <span className="mx-2">•</span>
              <span>{post.readingTime} min read</span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="aspect-video relative mb-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={post.image} 
              alt={post.title}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>

          {/* Content */}
          <div className="space-y-4">
            <p>{post.excerpt}</p>
            {/* This would be replaced with actual blog content from your CMS or markdown files */}
            <p>Full blog post content would go here...</p>
          </div>
        </div>
      </div>
    </article>
  );
}