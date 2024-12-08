const config = {
    appwriteUrl: String(process.env.REACT_APP_APPWRITE_URL),
    projectId: String(process.env.REACT_APP_APPWRITE_PROJECT_ID),
    projectApiKey: String(process.env.REACT_APP_APPWRITE_API_KEY),
    databaseId: String(process.env.REACT_APP_APPWRITE_DATABASE_ID),
    collectionTaskId: String(process.env.REACT_APP_APPWRITE_TASK_COLLECTION_ID),
    collectionBlogId: String(process.env.REACT_APP_APPWRITE_BLOG_COLLECTION_ID),
    storageBlogId: String(process.env.REACT_APP_APPWRITE_USER_DETAIL_COLLECTION_ID),
    collectionUserDetail: String(process.env.REACT_APP_APPWRITE_USER_DETAIL_COLLECTION_ID)
}

export default config;