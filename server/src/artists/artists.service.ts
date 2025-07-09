import { Injectable } from "@nestjs/common";
import { CreateArtistInput } from "./dto/create-artist.input";
import { UpdateArtistInput } from "./dto/update-artist.input";

@Injectable()
export class ArtistsService {
  create(createArtistInput: CreateArtistInput) {
    return "This action adds a new artist";
  }

  findAll() {
    return `This action returns all artists`;
  }

  findOne(id: string) {
    return `This action returns a #${id} artist`;
  }

  update(id: string, updateArtistInput: UpdateArtistInput) {
    return `This action updates a #${id} artist`;
  }

  remove(id: string) {
    return `This action removes a #${id} artist`;
  }
}
