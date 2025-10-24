// TODO: Replace with actual NextAuth implementation
export async function auth() {
  // Stub implementation - replace with NextAuth getServerSession
  return {
    user: {
      id: 'stub-user-id',
      email: 'user@example.com',
      name: 'Stub User'
    }
  }
}

