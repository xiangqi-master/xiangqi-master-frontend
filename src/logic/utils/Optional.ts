type Consumer<T> = (_value: T) => void
type Predicate<T> = (_value: T) => boolean
type Producer<T> = () => T
type Function<T, U> = (_value: T) => U
type ValueType<T> = T | null | undefined

/**
 * A util class to better manage null or undefined values.
 */
class Optional<T> {
  private readonly value: ValueType<T>

  private constructor(value?: ValueType<T>) {
    this.value = value
  }

  private isNull(value: any): boolean {
    return value === undefined || value === null
  }

  /**
   * Creates an `Optional` with a non-null value.
   *
   * @param value a non-null value for `Optional`
   * @throws {Error} if the value is null
   */
  public static of<T>(value: ValueType<T>): Optional<T> {
    if (!value) {
      throw new Error("Value cannot be null or undefined")
    }
    return new Optional<T>(value)
  }

  /**
   * Creates an `Optional` with a non-null value.
   *
   * @param value a non-null value for `Optional`
   */
  public static ofNullable<T>(value: ValueType<T>): Optional<T> {
    return new Optional<T>(value)
  }

  /**
   * Creates an `Optional` with a null value.
   */
  public static empty<T>(): Optional<T> {
    return new Optional<T>()
  }

  /**
   * Gets the value if it is not null and not undefined.
   *
   * @throws {Error} if the value is null or undefined
   */
  public get(): T {
    if (this.isNull(this.value)) {
      throw new Error("No such element!")
    }

    return this.value!
  }

  /**
   * Executes the {@link action} function with the value as the parameter. If the value is not null and not undefined,
   * {@link action} will be executed, otherwise, nothing happens.
   *
   * @param action the function to be executed if the value is not null and not undefined
   */
  public ifPresent(action: Consumer<T>): void {
    if (!this.isNull(this.value)) {
      action(this.value!)
    }
  }

  /**
   * Executes the {@link action} function with the value as the parameter if the value is not null and not undefined.
   * Otherwise, executes {@link emptyAction}.
   *
   * @param action the function to be executed if the value is not null and not undefined
   * @param emptyAction the function to be executed if the value is null or undefined
   */
  public ifPresentOrElse(action: Consumer<T>, emptyAction: Consumer<T>): void {
    if (this.isNull(this.value)) {
      emptyAction(this.value!)
    } else {
      action(this.value!)
    }
  }

  /**
   * Checks if the value is null or undefined.
   */
  public isPresent(): boolean {
    return !this.isNull(this.value)
  }

  /**
   * Modifies the value given by the {@link mapper} function if the value is not null and not undefined. If the value is null or undefined
   * returns an empty `Optional`.
   *
   * @param mapper the mapper function to be executed if the value is not null and not undefined
   */
  public map<U>(mapper: Function<T, ValueType<U>>): Optional<U> {
    if (this.isNull(this.value)) {
      return new Optional<U>()
    }

    return new Optional<U>(mapper(this.value!))
  }

  /**
   * Modifies the value given by the {@link mapper} function if the value is not null and not undefined. If the value is null or undefined
   * returns an empty `Optional`. Similar to {@link map}, but this method flattens the value such that there will be no nested `Optional`.
   *
   * @param mapper the mapper function to be executed if the value is not null and not undefined
   */
  public flatMap<U>(mapper: Function<T, ValueType<Optional<U>>>): Optional<U> {
    if (this.isNull(this.value)) {
      return new Optional<U>()
    }
    const result: ValueType<Optional<U>> = mapper(this.value!)
    if (this.isNull(result)) {
      return new Optional<U>()
    }
    return result!
  }

  /**
   * Filters the value if {@link predicate} is evaluated to be false. If the value is filtered, an empty `Optional`
   * will be returned.
   *
   * @param predicate checks if this value should be filtered or not
   */
  public filter(predicate: Predicate<T>): Optional<T> {
    if (this.isNull(this.value) || !predicate(this.value!)) {
      return new Optional<T>()
    }

    return new Optional<T>(this.value)
  }

  /**
   * Produces a `Optional` from {@link produce} function if the value is null or undefined. Otherwise, the original value
   * of a new `Optional` instance will be returned.
   *
   * @param produce the function that produces the new `Optional` if the value is null or undefined
   */
  public or(produce: Producer<Optional<T>>): Optional<T> {
    if (this.isNull(this.value)) {
      return produce()
    }

    return new Optional<T>(this.value)
  }

  /**
   * Returns {@link other} if the value is null or undefined. Otherwise, returns the existing value.
   *
   * @param other the other value to be returned if the current value is null or undefined.
   */
  public orElse(other: T): T {
    if (this.isNull(this.value)) {
      return other
    }

    return this.value!
  }

  /**
   * Returns another value produced by {@link produce} if the value is null or undefined. Otherwise, returns the existing value.
   *
   * @param produce the function that produces the new value if the value is null or undefined
   */
  public orElseGet(produce: Producer<T>): T {
    if (this.isNull(this.value)) {
      return produce()
    }

    return this.value!
  }

  /**
   * Gets the value if it is not null and not undefined. Otherwise, an error produced by {@link produceError} will be thrown.
   *
   * @param produceError the function to produce the error if the value is null or undefined
   */
  public orElseThrow(produceError: Producer<Error>): T {
    if (this.isNull(this.value)) {
      throw produceError()
    }

    return this.value!
  }

  public equals(other: Optional<any>) {
    if (this.isNull(this.value)) {
      return other.isNull(other.value)
    }

    return this.value === other.value
  }
}

export default Optional
