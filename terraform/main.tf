resource "aws_vpc" "sample_vpc" {
  cidr_block = "10.0.0.0/16"

  tags = {
    Name = "sampleVPC"
  }
}

resource "aws_subnet" "sample_public_subnet" {
  vpc_id     = aws_vpc.sample_vpc.id
  cidr_block = "10.0.1.0/24"
  

  tags = {
    Name = "Sample Public Subnet"
  }
}

resource "aws_instance" "sample_server" {
  ami           = "ami-04b6019d38ea93034"
  instance_type = var.instance_type
  subnet_id     = aws_subnet.sample_public_subnet.id
  associate_public_ip_address = true

  tags = {
    Name = "SampleServer"
  }
}

resource "aws_route" "sample_route" {
  vpc_endpoint_id        = aws_vpc.sample_vpc.id
  route_table_id         = aws_route_table.sample_public_rt.id
  destination_cidr_block = "0.0.0.0/0"
}

resource "aws_route_table" "sample_public_rt" {
  vpc_id = aws_vpc.sample_vpc.id

  tags = {
    Name = "Sample Public RT"
  }
}

resource "aws_internet_gateway" "sample_igw" {
  vpc_id = aws_vpc.sample_vpc.id
  tags = {
    Name = "Sample IGW"
  }
}

resource "aws_route_table_association" "sample_public_rta" {
  route_table_id = aws_route_table.sample_public_rt.id
  subnet_id      = aws_subnet.sample_public_subnet.id
}