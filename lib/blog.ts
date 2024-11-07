import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export async function getPosts() {
  // This is a placeholder that would normally read from your content directory
  // For demo purposes, returning static data
  return [
    {
      slug: 'seo-strategies-2024',
      title: 'Essential SEO Strategies for 2024',
      excerpt: 'Discover the latest SEO techniques and strategies that will help your business rank higher in 2024.',
      date: '2024-03-20',
      image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80',
      categories: ['SEO', 'Digital Marketing'],
      readingTime: 5
    },
    {
      slug: 'social-media-trends',
      title: 'Social Media Marketing Trends to Watch',
      excerpt: 'Stay ahead of the curve with these emerging social media marketing trends and strategies.',
      date: '2024-03-18',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
      categories: ['Social Media', 'Marketing'],
      readingTime: 4
    },
    {
      slug: 'ppc-optimization',
      title: 'PPC Campaign Optimization Guide',
      excerpt: 'Learn how to optimize your PPC campaigns for better ROI and conversion rates.',
      date: '2024-03-15',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      categories: ['PPC', 'Advertising'],
      readingTime: 6
    }
  ];
}

export async function getPostBySlug(slug: string) {
  // This would normally read from your content directory
  const posts = await getPosts();
  return posts.find(post => post.slug === slug);
}