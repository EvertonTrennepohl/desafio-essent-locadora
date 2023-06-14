-- CreateTable
CREATE TABLE "ActorsOnMovies" (
    "actorId" INTEGER NOT NULL,
    "movieId" INTEGER NOT NULL,

    CONSTRAINT "ActorsOnMovies_pkey" PRIMARY KEY ("actorId","movieId")
);

-- AddForeignKey
ALTER TABLE "ActorsOnMovies" ADD CONSTRAINT "ActorsOnMovies_actorId_fkey" FOREIGN KEY ("actorId") REFERENCES "Actor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActorsOnMovies" ADD CONSTRAINT "ActorsOnMovies_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
